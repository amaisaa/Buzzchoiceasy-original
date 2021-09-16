import React from 'react';
import HomeView from '../View/CatalogView';
import HomeModel from '../Model/CatalogModel';

class HomeController extends React.Component{
    
  constructor() {
      super();
        let homeModel = new HomeModel();
        console.log(homeModel.returnText());
        let arrayPlaces = [];
        for(let inq = 0; inq < 50; inq++){
          arrayPlaces.push({
            id: inq,
            name: 'Item ' + inq,
            Image: 'https://picsum.photos/20'+inq+'/300',
            address:
              'R$' + inq+',90',
          });

        }

      this.state = {
        count: 0,
        isRunning: false,
        search: '',
        filteredArrayPlaces: [...arrayPlaces],
        originalArrayPlaces: [...arrayPlaces],

      };

    }

    onSearchUpdate = (text) => {
      let filteredPlaces = this.state.originalArrayPlaces.filter((item) => {
        return item.name.includes(text) || item.address.includes(text);

      })
      this.setState({
        search: text,
        filteredArrayPlaces: filteredPlaces,
      })
    }

    goToProductInfo = () => {
      this.props.navigation.navigate['Produto']
    }

    

    render = () => {
      return <HomeView 
      count={this.count}
      search={this.state.search}
      onSearchUpdate={this.onSearchUpdate}
      goToProductInfo={this.goToProductInfo}
      filteredArrayPlaces={this.state.filteredArrayPlaces}
      />;
    }
}

export default HomeController;