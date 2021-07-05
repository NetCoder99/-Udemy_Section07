import React from 'react';

//import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {
  return (
    <div>
    <table className="goal-list-table">
      <thead>
        <tr>
        <th>Id</th>
        <th>Text</th>
        <th></th>
        </tr>
      </thead>
      <tbody>
      {props.items.map(goal => (
        <tr key={goal.id}>
          <td>{goal.id}</td>
          <td>{goal.text}</td>
          <td>Delete</td>
        </tr>
      ))}
      </tbody>
    </table>



    {/* <ul className="goal-list">
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}>
          <div className={"goal-list col1"}>
            {goal.id}
          </div>  
          <div className={"goal-list col2"}>
            {goal.text}
          </div>  

        </CourseGoalItem>
      ))}
    </ul> */}
    </div>
  );
};

export default CourseGoalList;
