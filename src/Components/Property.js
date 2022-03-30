import React, { useState } from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import { dataList } from "../data";
import Search from "./Search";
import PrimaryButton from './PrimaryButton';

function PaymentSection() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);

  const excludeColumns = [
    "id",
    "type",
    "size",
    "capacity",
    "description",
    "img",
  ];
  const handleChange = (value) => {
      console.log(value)
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") 
    setData(dataList);
    else {
      const filteredData = dataList?.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };
  return (
    <PaymentStyled>
      <InnerLayout>
        <h3 className="small-heading">
          Find a property <span>at the right price</span>
        </h3>
        
        <div >
        <input
          style={{height:"50px",width:"800px",borderRadius:"20px",fontSize:"1.5rem",margin:"20px",padding:"20px"}}
          type="text"
          placeholder="Search by location"
          value={searchText}
          onChange={(e) => handleChange(e.target.value)}
        />
            <PrimaryButton name={'Search'} />

        </div>
       
        <div className="box-container">
          {data?.map((d, i) => {
            return (
              <div key={i} className="box">
                <Search value={d}></Search>
              </div>
            );
          })}
          <div className="clearboth"></div>
          {data.length === 0 && <span>No records found to display!</span>}
        </div>
      </InnerLayout>
    </PaymentStyled>
  );
}

const PaymentStyled = styled.section`
  .card-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    padding-top: 7.4rem;
    @media screen and (max-width: 689px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .c-para {
    text-align: center;
  }
`;
export default PaymentSection;
