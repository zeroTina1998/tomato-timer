import React, { Component } from 'react';
import { Button } from 'antd';
class Index extends Component<any> {
    constructor(props:any){
        super(props);
        this.state={
           
        }
    }
     login =()=>{   
        this.props.history.push('/Login')
    }
    
    
    render() {
        return (
            <div>
                <Button onClick={this.login}>登录</Button>
            </div>
        );
    }
}

export default Index;