import React from "react";

const Contact = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-sm-5">
          <h1>Contact</h1>
          <hr/>
        <form>
            <div className="form-group">
              <label for="exampleInputName1">Name</label>
              <input type="name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp"/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1"/>
            </div>
            <div className="form-group">
                <label for="exampleInputMessage1">Message</label>
                <textarea rows="3" className="form-control" id="exampleInputMessage1"></textarea>
              </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>

        <div className="col-sm-3"></div>

        <div className="col-sm-4">
          <div className="card" style="width: 18rem;">
            <div className="card-header">
              Contact Elizabeth:
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Elizabeth.J.Reuter@gmail.com</li>
              <li className="list-group-item">(616) 901-9806</li>
              <a className="list-group-item" href="https://github.com/ElizabethReuter" target="_blank">GitHub</a>
              <a className="list-group-item" href="https://www.linkedin.com/in/elizabeth-reuter-2132411b0/" target="_blank">LinkedIn</a>   
            </ul>
          </div>
        </div>
    </div>
  </div>
  );
};

export default Contact;
