import React from 'react'

import './Home.css'
import '../MainPage/Mainpage'
import Mainpage from '../MainPage/Mainpage'
import HomeHeader from './HomeHeader'

const Homefun = ({item}) => {
    //debugger;  

    return (
        <div className='hmaindiv'>
            <div className='hheaderdiv'>
                <HomeHeader  />
            </div>
            <div className='hinnerdiv'>
                <Mainpage item={item} />
            </div>
        </div>
    )
}



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false,
        };
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded)
            return (
                <div>
                    <h1> Loading... </h1>{" "}
                </div>
            );
        return items.map((item, index) => <Homefun item={item} />);
    }

    componentDidMount() {
        fetch("https://6378f7607419b414df873693.mockapi.io/cv")
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                this.setState({
                    items: json,
                    DataisLoaded: true,
                });
            });
    }
}
export default Home;
