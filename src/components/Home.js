/** @format */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const _onSubmit = (e) => {
    e.preventDefault();
    return history.push(`/search/${search}`);
  };

  return (
    <div className='h-100 w-100 d-flex align-items-center'>
      <div className='col-sm-5 mx-auto  p-4 bg-light shadow'>
        <form onSubmit={_onSubmit}>
          <div className='input-group mb-3'>
            <input
              type='text'
              onChange={(e) => setSearch(e.target.value)}
              className='form-control form-control-lg'
              placeholder='Search Here'
            />
            <button type='submit' className='input-group-text btn-success'>
              <i className='bi bi-search me-2'></i> Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
