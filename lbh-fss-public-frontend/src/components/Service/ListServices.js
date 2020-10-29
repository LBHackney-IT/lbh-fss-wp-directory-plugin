import React, { useEffect, useState, useContext } from 'react';
import GetServices from "../../services/GetServices/GetServices";
import ServiceCard from "./ServiceCard";
import { CardContainer } from "../../util/styled-components/CardContainer";
import PrevUrlContext from "../../context/PrevUrlContext/PrevUrlContext";
import UrlParamsContext from "../../context/UrlParamsContext/UrlParamsContext";
import PrevUrlParamsContext from "../../context/PrevUrlParamsContext/PrevUrlParamsContext";
import MapToggleContext from "../../context/MapToggleContext/MapToggleContext";
import ToggleView from "../ToggleView/ToggleView";
import Header from "../Header/Header";
import ServiceFilter from '../ServiceFilter/ServiceFilter';
import styled from "styled-components";
import {MapContainer} from "../../util/styled-components/MapContainer";
import { useMediaQuery } from 'react-responsive';
import HackneyMap from "../HackneyMap/HackneyMap";
import MapPlaceholder from "../MapPlaceholder/MapPlaceholder";
import ServiceSearch from '../ServiceSearch/ServiceSearch';

const ListServices = ({ onClick }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {urlParams, setUrlParams} = useContext(UrlParamsContext);
  const {prevUrl, setPrevUrl} = useContext(PrevUrlContext);
  const {prevUrlParams, setPrevUrlParams} = useContext(PrevUrlParamsContext);
  const {mapToggle, setMapToggle} = useContext(MapToggleContext);
  const paramsArray = ["category_explorer", "postcode", "service_search", "support_service", "categories", "demographic"];
  const currentSearch = window.location.search;
  let paramObj = {};
  const [showMap, setShowMap] = useState("false");
  const [fetchOnce, setfetchOnce] = useState(false);

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 768 })
    return isDesktop ? children : null
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

  function createParamObj(currentSearch, paramsArray) {
    const queryParts = currentSearch.substring(1).split(/[&;]/g);
    const arrayLength = queryParts.length;
    for (let i = 0; i < arrayLength; i++) {
      const queryKeyValue = queryParts[i].split("=");
      if (paramsArray.includes(queryKeyValue[0])) {
        paramObj[queryKeyValue[0]] = queryKeyValue[1];
      } 
    }
  }

  useEffect(() => {
    async function fetchData() {
      let postcode = "";
      let search = "";
      let taxonomyId = [];
      for (const [key, value] of Object.entries(urlParams)) {
        if (key == "postcode" && value !== "") {
          postcode = value;
        }
        if (key == "service_search" && value !== "") {
          search = value;
        }
        if ((key == "categories" || key == "demographic") && value !== "") {
          taxonomyId.push(value);
        }
      }
      // call retrieveServicesByCategory with taxonomyids param passed to return all services associated with the category
      const getServices = await GetServices.retrieveServices({postcode: postcode, search: search, taxonomyids: taxonomyId});
      setData(getServices || []);
      setIsLoading(false);
    }
    if (fetchOnce == false) {
      fetchData();
      setfetchOnce(true);
    }

    if (prevUrl.length == 0 && prevUrlParams.length == 0) {
      let prevUrlArray = [""];
      let prevUrlParamsArray = [{}];

      // setPrevUrl
      if (currentSearch) {
        prevUrlArray.push(currentSearch);
        setPrevUrl(prevUrlArray);
      }

      // setPrevUrlParams
      createParamObj(currentSearch, paramsArray);
      prevUrlParamsArray.push(paramObj);
      setPrevUrlParams(prevUrlParamsArray);
    }

    if (mapToggle === "true") {
      setShowMap("true");
    } else {
      setShowMap("false");
    }

  });

  if (isLoading) {
    return <span>Loading</span>;
  }

  const select = e => {
    onClick(e);
  }

  return(
    <div>
      {!data.services.length ? (
        <div>
          <Header />
          <div className="no-results">
            <h2>No results found</h2>
            <p>Please use the 'Back' button above to go back and try a different search term.</p>
          </div>
          <MapPlaceholder />
        </div>
      ) : (
        <div>
          <Header />
          <ServiceSearch />
          <ServiceFilter />
          <Mobile>
            <ToggleView />
            {
              ( showMap == "false" ) ?
                <CardContainer>
                  {data.services.map((service, index) => {
                    return (
                      <ServiceCard key={index} service={service} onClick={select} />
                    );
                  })}
                </CardContainer> : ""
            }
          </Mobile>
          <Desktop>
            <CardContainer>
              {data.services.map((service, index) => {
                return (
                  <ServiceCard key={index} service={service} onClick={select} />
                );
              })}
            </CardContainer>
          </Desktop>

          <Mobile>
          {
            ( showMap == "true" ) ?
              <MapContainer>
                <HackneyMap data={data} />
              </MapContainer> : ""
            }
          </Mobile>
          <Desktop>
            <MapContainer>
              <HackneyMap data={data} />
            </MapContainer>
          </Desktop>
        </div>
      )}
    </div>
  );

}


export default ListServices;