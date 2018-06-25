let searchInput;
let searchBtn;
let searchResult;
$(document).ready(function (){
        searchInput = $('#search-input');
        searchBtn = $('#search-btn');
        searchResult=$('#search-result');
        searchBtn.click(function () {
                console.log("Clicked");
                console.log(searchInput.val());
            $.get('/a/states/'+searchInput.val(),function (data) {
                console.log(data);
                searchResult.empty();
                for(let counter in data){
                        let tempData = createContent(data[counter]);
                        searchResult.append(tempData);
                }
            })
        })

});

function createContent(dataObject){
        console.log(dataObject)
        let searchResultObject = $(`<div class="row ">
        <div class="col-6 offset-3">
            <div class="row result">
                <div class="col-3 ">
                    <img class="card-img hotel-image image" src="../hotel.jpeg">
                </div>
                <div class="col-5 about-div">
                    <div class="row">
                        <div class="col">
                            <h5><b>${dataObject.name}</b></h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            Rating : ${dataObject.rating}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            State : ${dataObject.state}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            Overall Rating : Good
                        </div>
                    </div>
                </div>
                <div class="col-4 price-div">
                    <div class="row text-center">
                        <div class="col" style="color: red; text-decoration: line-through">
                            <b>${dataObject.maxPrice}</b>
                        </div>
                    </div>
                    <div class="row text-center" style="color: green">
                        <div class="col">
                            <b>${dataObject.offerPrice}</b>
                        </div>
                    </div>
                    <div class="row text-center ">
                        <div class="col">
                            <button class="btn btn-success" >
                                View Deal
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>`);

    return searchResultObject;
}