import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
    const {data} = topics;
    console.log(data)
    return (
        <div>
            {
              data.map(topic => <Topic topic={topic} key={topic.id}></Topic>)
            }
        </div>
    );
};

export default Topics;