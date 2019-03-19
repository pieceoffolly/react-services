import React, { Component } from 'react';
import styled from 'styled-components';

class Paginator extends Component {

    // constructor(props) {
    //     super(props);
    //     this.renderPrev = () => this.renderPrev();    
    // }
    // renderPrev = () => this.renderPrev();

    render() {
        if (!this.props.totalPages || this.props.totalPages === '1') {
            return (<div></div>);
        } else{
            return (
                <MainDiv>
                    <ul>
                        {this.renderPrev(this.props.currentPage)}
                        {this.renderFirst(this.props.currentPage)}                        
                        {this.renderPagesBetween(this.props.currentPage, this.props.totalPages)}
                        {/* <li key="last">{this.props.totalPages}</li> */}
                        {this.renderLast(this.props.currentPage, this.props.totalPages)}
                        {this.renderNext(this.props.currentPage, this.props.totalPages)}
                    </ul>
                </MainDiv>
            )
        }
    };

    renderPrev(currentPage) {
        if (currentPage !== 1){
            return <li key='prev'>Prev</li>
        } else {
            return 
        }

    };

    renderFirst(currentPage) {
        if (currentPage == 1){
            return (<li className="bold_li" key="1">1</li>)
        } else {
            return (<li key="1">1</li>)
        }
    }

    renderPagesBetween(currentPage, totalPages) {
        let resLi = [];
        let length = 5;
        let num = currentPage - 2;
        
        if (currentPage - 1 > 3) {
            resLi[0] = <li key='backward'>...</li>;
            length = 6;
        }            
        else {
            num = 2;
            if ((totalPages - 1 > 5) && (currentPage - 1 == 3)) {
                resLi[0] = <li key='backward'>...</li>;     
            }
        }

        if (totalPages - 1 > 4) {
            if (totalPages - currentPage == 3) {
                num = num + 1;
            } else if (totalPages - currentPage < 3) {
                num = num - (2 - (totalPages - currentPage));
                if (totalPages - 1 == 5) resLi[0] = undefined;
            }            
        }

        for (let index = 1; index < length; index++) {
            if (num === currentPage)
                resLi[index] = <li className="bold_li" key={num}>{num}</li>
            else
                resLi[index] = <li key={num}>{num}</li>;
            num++;
            if (num == totalPages) break;
        }
        
        
        if ((totalPages - currentPage > 3) && (totalPages - 1 > 5)) {
            resLi[6] = <li key='forward'>...</li>;
        }

        return(
            resLi
        )
    };    

    renderNext(currentPage, totalPages) {
        if (currentPage !== totalPages){
            return <li key='next'>Next</li>
        } else {
            return 
        }
    };

    renderLast(currentPage, totalPages) {
        if (currentPage == totalPages){
            return (<li className="bold_li" key={totalPages}>{totalPages}</li>)
        } else {
            return (<li key={totalPages}>{totalPages}</li>)
        }
    }

    // onPageClick() {

    // }

    // onNextClick() {

    // }

    // onPrevClick() {

    // }

}

export default Paginator;

const MainDiv = styled.div`
    cursor: pointer;
   li {  
        padding: 5px;
        background-color: #f5f5f5;
        margin-right: 10px;
        display: inline-block;
   } 

   li:hover {
        background-color: #e5e5e5;
   }

   .bold_li {
        background-color: #e5e5e5;
   }
`;

const BoldLi = styled.li`
    background-color: #e5e5e5;
`;