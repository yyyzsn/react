'use strict';
import React from 'react';

export default class TodoHeader extends React.Component {
    //绑定键盘回车事件，添加新任务
    handlerKeyUp(event){
        if (event.keyCode==13) {
            let value=event.target.value;
            if(!value) return false;
            let newTodoItem={
                text:value,
                isDone:false
            };
            event.target.value="";
            this.props.addTodo(newTodoItem);
        }
    }


    render(){
        return (
            <div className="panel-header">
                <input type="text" placeholder="what's your task?" onKeyUp={this.handlerKeyUp.bind(this)}/>
            </div>
        )
    }
}