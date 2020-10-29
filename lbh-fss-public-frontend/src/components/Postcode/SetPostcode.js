import React, { useEffect, useState, useContext, useRef } from "react";
import AppLoading from "../../AppLoading";
import Header from "../Header/Header";
import UrlContext from "../../context/UrlContext/UrlContext";
import PrevUrlContext from "../../context/PrevUrlContext/PrevUrlContext";
import UrlParamsContext from "../../context/UrlParamsContext/UrlParamsContext";
import PrevUrlParamsContext from "../../context/PrevUrlParamsContext/PrevUrlParamsContext";
import FormInput from "../FormInput/FormInput";
import FormError from "../FormError/FormError";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { postcodeValidator, postcodeValidatorExists } from 'postcode-validator';
import history from '../../history';
import { dark, red, light } from "../../settings";
import MapPlaceholder from "../MapPlaceholder/MapPlaceholder";

export const SetPostcodeContainer = styled.div`
    padding: 20px 15px;
    position: relative;
    z-index: 1;
    background: ${light["white"]};
    height: 100vh;
    h2 {
        font-size: 27px;
        font-weight: normal;
        margin-bottom: 10px;
    }
    p {
        font-size: 19px;
        color: ${dark["grey"]};
    }
    input[name=postcode] {
        border: 2px solid ${dark["offBlack"]};
        box-sizing: border-box;
        border-radius: 3px;
    }
    span[role=alert] {
        color: ${red["error"]};
    }
`;

const StyledButton = styled(Button)`
    width: 100%;
    border-radius: 3px;
    border-bottom: 2px solid ${dark["black"]};
`;

const SetPostcode = () => {
    const {url, setUrl} = useContext(UrlContext);
    const {prevUrl, setPrevUrl} = useContext(PrevUrlContext);
    const {urlParams, setUrlParams} = useContext(UrlParamsContext);
    const {prevUrlParams, setPrevUrlParams} = useContext(PrevUrlParamsContext);
    const [isLoading, setIsLoading] = useState(true);
    const paramsArray = ["category_explorer", "postcode" , "service_search", "support_service"];
    const { register, handleSubmit, errors, reset } = useForm();
    const storedPostcode = localStorage.getItem("postcode");

    useEffect(() => {
        setIsLoading(false);
    }, [setIsLoading]);

    async function submitForm({ postcode }) {
        if (isLoading) return;
        const prevUrlArrayLast = prevUrl[prevUrl.length - 1];
        const prevUrlParamsArrayLast = prevUrlParams[prevUrlParams.length - 1];
        
        const validPostcode = postcodeValidator(postcode, 'UK');
        if (validPostcode) {
            localStorage.setItem("postcode", postcode);
            let push = "?" + new URLSearchParams(prevUrlParamsArrayLast).toString().replace(/%2C/g,"+");
            let params = prevUrlParamsArrayLast;

            if (prevUrl.length !== 0 && prevUrlParams.length !== 0) {
                push = prevUrlArrayLast;
                params = prevUrlParamsArrayLast;

                // checking if previous page is support_service
                if (prevUrlParamsArrayLast.support_service !== undefined) {
                    //
                } else {
                // catch all for list services
                    const ListServicesSearchObj = prevUrlParams.find(ListServicesSearchObj => ListServicesSearchObj.service_search);
                    let ListServicesPostcodeObj = prevUrlParams.find(ListServicesPostcodeObj => ListServicesPostcodeObj.postcode);
                    prevUrlParamsArrayLast["postcode"] = postcode;
                    if (ListServicesSearchObj !== undefined) {
                    // if service_search exists in prevUrlParams
                        // replace previous postcode with new value
                        ListServicesSearchObj.postcode = postcode;
                        push = "?" + new URLSearchParams(ListServicesSearchObj).toString();
                        push = push.replaceAll("=undefined", "");
                        params = ListServicesSearchObj;
                    } else if (ListServicesPostcodeObj !== undefined) {
                    // if postcode exists in prevUrlParams
                        // replace previous postcode with new value
                        ListServicesPostcodeObj.postcode = postcode;
                        push = "?" + new URLSearchParams(ListServicesPostcodeObj).toString();
                        push = push.replaceAll("=undefined", "");
                        params = ListServicesPostcodeObj;
                    }
                }
            }

            history.push(push);
            setUrl(push);
            setUrlParams(params);
        }
    }

    return (
        isLoading ? (
            <AppLoading />
        ) : (
            <>
            <div className="">
                <Header />
                <SetPostcodeContainer>    
                    <h2>Enter full postcode</h2>
                    <p>This will list services near you</p>
                    <form onSubmit={handleSubmit(submitForm)} data-testid="form">
                        <FormInput
                            label="Enter a postcode"
                            placeholder="Enter full postcode e.g E8 1DY (optional)"
                            name="postcode"
                            register={register}
                            defaultValue={storedPostcode}
                            autoComplete="off"
                            validate={{
                                pattern: (value) => {
                                    return (
                                        postcodeValidator(value, 'UK') ||
                                        "Please enter a valid postcode"
                                    );
                                },
                            }}
                            error={errors.postcode}
                        />
                        <StyledButton type="submit" label="Enter postcode" disabled={isLoading} />
                    </form>
                </SetPostcodeContainer>
                <MapPlaceholder />
            </div>
            </>
        )
    )
}

export default SetPostcode;