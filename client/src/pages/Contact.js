import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FAVORITE, LOADING, UPDATE_FAVORITES } from "../utils/actions";

const Contact = () => {
  const [state, dispatch] = useStoreContext();

  const getFavorites = () => {
    dispatch({ type: LOADING });
    dispatch({ type: UPDATE_FAVORITES });
  };

  const removeFromFavorites = id => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: id
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div class="container">
    <div class="row">
      <div class="col-sm-5">
          <h1>Contact</h1>
          <hr/>
        <form>
            <div class="form-group">
              <label for="exampleInputName1">Name</label>
              <input type="name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp"/>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1"/>
            </div>
            <div class="form-group">
                <label for="exampleInputMessage1">Message</label>
                <textarea rows="3" class="form-control" id="exampleInputMessage1"></textarea>
              </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
      </div>

        <div class="col-sm-3"></div>

        <div class="col-sm-4">
          <div class="card" style="width: 18rem;">
            <div class="card-header">
              Contact Elizabeth:
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Elizabeth.J.Reuter@gmail.com</li>
              <li class="list-group-item">(616) 901-9806</li>
              <a class="list-group-item" href="https://github.com/ElizabethReuter" target="_blank">GitHub</a>
              <a class="list-group-item" href="https://www.linkedin.com/in/elizabeth-reuter-2132411b0/" target="_blank">LinkedIn</a>   
            </ul>
          </div>
        </div>
    </div>
  </div>
  );
};

export default Contact;
