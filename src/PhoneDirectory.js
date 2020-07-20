import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [
                {
                    id: 1,
                    name: "Harsh Bhardwaj",
                    blog: "COVID-19 has provoked a lot of conversations around data privacy framed as, “what if we erode privacy rights in exchange for the greater good of protecting human life and reopening the economy?” I think that’s a little bit of a false dichotomy or false choice. One of the problems right now is that even if location data is anonymized it still provides contextual information. If you have enough data points and know where someone lives or works, you can probably determine who someone is based on their location data.",
                    image: "harsh/img.jpg"
                },
                {
                    id: 2,
                    name: "Srishti Gupta",
                    blog: "The technology that was once designed to destroy has become life savior during COVID-19. In this unprecedented time, they are helping authorities in surveillance and monitoring, delivering medicines and goods in the hard reached area, they are being used in spraying disinfectant, temperature check, etc. In several countries including China, Germany, and the United States, empty fields have been converted into temporary hospitals to ease the pressure on hospitals that are already functioning at full capacity. Drones are helping governments in surveying those areas and build more efficiently and with minimal human involvement",
                    image: "srishti/img.jpg"
                }
            ]
        }
    }

     deleteSubscriberHandler = (subscriberId) => {
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach(function (subscriber, index) {
            if (subscriber.id === subscriberId) {
                subscriberIndex = index;
            }
        }, this);
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribers: newSubscribers});
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
    }


    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler= {this.deleteSubscriberHandler} />} />
                    <Route exact path="/create" render={({history}, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
                </div>
            </Router>
        )
    }
}

export default PhoneDirectory;