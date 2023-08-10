import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';
import Full from './components/Full';

class App extends React.Component {
constructor(props){
  super(props)
  this.state = {
    orders: [],
    currentItems: [],
    items: [
      {
        id: 1,
        title: 'Стул серый',
        img: 'chair-grey.jpeg',
        desc: 'Стул серый из ИКЕА.',
        category: 'chairs',
        price: '49.99'
      },
      {
        id: 2,
        title: 'Стол',
        img: 'table.webp',
        desc: 'Lorem ipsum dolor sit amet.',
        category: 'tables',
        price: '149.99'
      },
      {
        id: 3,
        title: 'Стул серый',
        img: 'chair-grey.jpeg',
        desc: 'Стул серый НЕ из ИКЕА.',
        category: 'chairs',
        price: '49.99'
      },
      {
        id: 4,
        title: 'Диван',
        img: 'sofa.jpeg',
        desc: 'Lorem ipsum dolor sit amet.',
        category: 'sofa',
        price: '549.99'
      },
      {
        id: 5,
        title: 'Лампа',
        img: 'wall-light.jpeg',
        desc: 'Lorem ipsum dolor sit amet.',
        category: 'light',
        price: '29.99'
      },
      {
        id: 6,
        title: 'Стул белый',
        img: 'chair-white.jpeg',
        desc: 'Lorem ipsum dolor sit amet.',
        category: 'chairs',
        price: '49.99'
      } 
    ],
    Full: false,
    fullItem: {}
  }
  this.state.currentItems = this.state.items
  this.addToOrder = this.addToOrder.bind(this)
  this.deleteOrder = this.deleteOrder.bind(this)
  this.chooseCategory = this.chooseCategory.bind(this)
  this.onFull = this.onFull.bind(this)
}
  render (){
  return (
   <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory} />
      <Items onFull={this.onFull} items={this.state.currentItems} onAdd={this.addToOrder}/>

      {this.state.Full && <Full onAdd={this.addToOrder}  onFull={this.onFull} item={this.state.fullItem}/>}
      <Footer/>
   </div>
  );
}

onFull( item) {
  this.setState({fullItem: item})
  this.setState({Full: !this.state.Full})
}

chooseCategory(category) {
if( category === 'all') {
  this.setState({currentItems: this.state.items})
  return
}

this.setState({
  currentItems: this.state.items.filter(el => el.category === category)
})
}

deleteOrder(id) {
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}

addToOrder(item){
  let isInArray = false 
  this.state.orders.forEach(el => {
    if(el.id === item.id)
    isInArray = true
  })
if(!isInArray)
  this.setState({orders: [...this.state.orders, item]})
}
}

export default App;
