// Create a class for the element
class Book extends HTMLElement {
  constructor() {
    super();

    // attribute content 
    const title       = this.getAttribute('title');
    const Genre       = this.getAttribute('Genre');    
    const author      = this.getAttribute('author');    
    const publisher   = this.getAttribute('publisher');    
    const description = this.getAttribute('description');  
    const rating     = this.getAttribute('rating');

    this.innerHTML = `
        <div class="card">
          <h5 class="card-header">${title}</h5>
          <div class="card-body">
          
            <h5>${rating}</h5>
                <p class="card-text">
                <table class="table">
                    <td class="text-primary font-weight-bold">Title:</td>
                        <td>${title}</td>
                    </tr>
                    <tr>
                        <td class="text-primary font-weight-bold">Genre:</td>
                        <td>${Genre}</td>
                    </tr>
                    <tr>
                        <td class="text-primary font-weight-bold">Author:</td>
                        <td>${author}</td>
                    </tr>
                    <tr>
                        <td class="text-primary font-weight-bold">Publisher:</td>
                        <td>${publisher}</td>
                    </tr>
                    <tr>
                        <td class="text-primary font-weight-bold">Description:</td>
                        <td>${description}</td>
                    </tr>
                </table>
                </p>
          </div>
        </div>
    `;    

  }
}

// Define the new element
customElements.define('mit-book', Book);
