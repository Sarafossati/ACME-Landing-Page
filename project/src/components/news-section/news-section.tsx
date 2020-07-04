import { Component, ComponentInterface, h, State } from '@stencil/core';
import { News } from './news';

/*
* acme's news container using Fetch 
*/

@Component({
  tag: 'news-section',
  styleUrl: 'news-section.css',
  shadow: true,
})
export class NewsSection implements ComponentInterface {
  @State() page = 1;
  @State() news: Array <News> = [];
  @State() limit = 2;
  
  

  componentDidLoad() {
    this.fetchData();
  }

  private fetchData = () => {
    if (this.limit >= 10) {
      return;
    }
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`)
      .then(response => response.json())
      .then((json) => (this.news = json))
    this.limit += 2;
  };


  render() {
    return (
     <div class="box-esterno">
        <h3>NEWS</h3>
        {this.news.map(news =>
          <div class="container">
            <div class="singolo">
              <div>
                <h3 class="titoletto">{news.title}</h3>
                <p>{news.body}</p>
              </div>
            <div class="numero-news">{news.id}</div>
            </div>
          </div>
        )}
        <bottone-scuro btnTextScuro="Carica altri" onClick={this.fetchData}></bottone-scuro>
      </div>
    );
  }

}
