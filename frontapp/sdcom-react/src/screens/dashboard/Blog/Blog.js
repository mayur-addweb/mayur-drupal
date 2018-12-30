import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config/config';

class Blog extends Component {

  constructor(props){
    super(props)
    this.state ={
      blog_data: [],
      base_url: config.my_api
    }
    axios.get(config.my_api + '/blog/rest?_format=json').then((res) => {
      this.setState({blog_data: res.data});
      console.log(this.state.blog_data);
  
    }).catch((error) => {
      console.log(error);
    })

  }

  render() {
    return (
      <section class="blog-wrap carousel slider carousel-multi-item" data-ride="carousel" id="blog">
      <div class="container">
        <h2 class="main-heading">BLOGS</h2>
        <div class="blog-slider">
          <div class="row">
          { 
            this.state.blog_data.map((sample,idx) => {
              return(
          <div class=" col-md-4">
            <div class="card">
              <div class="view overlay img-effect img-wave">
              <a href={sample['field_blog_url']}><img src={config.my_api + sample['field_blog_image']} class="img-fluid" alt="" /></a>
              </div>
              <div class="card-body">
                <a href={sample['field_blog_url']}><h4 class="card-title">{sample['title']}</h4></a>
                <div class="auth-info center-wrapper">
                  <img src={config.my_api + sample['field_author_img']} class="auth-img" />
                  <div class="auth-name">{sample['field_blog_author']}</div>
                </div>
                <div class="publish-info">
                  <span>{sample['field_blog_date']}</span>
                  <span class="one-dot"></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
              )}
            )
          }
         </div>
        </div>
      </div>
    </section>
  
    );
  }
}

export default Blog;
