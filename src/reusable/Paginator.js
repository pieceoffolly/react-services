import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Paginator extends Component {

    render() {
        if (!this.props.totalPages || this.props.totalPages === '1') {
            return (<div></div>);
        } else{
            return (
                <MainDiv>
                    <ul>
                        {this.renderPrev(this.props.currentPage, this.onClick)}
                        {this.renderFirst(this.props.currentPage, this.onClick)}                        
                        {this.renderPagesBetween(this.props.currentPage, this.props.totalPages, this.onClick)}
                        {this.renderLast(this.props.currentPage, this.props.totalPages, this.onClick)}
                        {this.renderNext(this.props.currentPage, this.props.totalPages, this.onClick)}                        
                    </ul>
                </MainDiv>
            )
        }
    };

    renderPages() {

    }

    renderPrev(currentPage, onClick) {
        let page = Number(currentPage) - 1;
        if (currentPage != 1){
            return <Link to={"/gh?page="+page}>
                        <li key='prev' onClick={onClick}>Prev</li>
                   </Link>
        } else {
            return 
        }                
    };

    renderFirst(currentPage, onClick) {
        if (currentPage == 1){
            return  <Link to={ "/gh?page=1"}>
                        <li className="bold_li" key="1" onClick={onClick}>1</li>
                    </Link>
        } else {
            return  <Link to={ "/gh?page=1"}>
                        <li key="1" onClick={onClick}>1</li>
                    </Link>
        }
    }

    renderPagesBetween(currentPage, totalPages, onClick) {
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
            if (num == currentPage)
                resLi[index] =  <Link to={"/gh?page=" + num}>
                                        <li className="bold_li" key={num} onClick={onClick}>{num}</li>
                                </Link>
            else
                resLi[index] =  <Link to={"/gh?page=" + num}>
                                        <li key={num} onClick={onClick}>{num}</li>
                                </Link>
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

    renderNext(currentPage, totalPages, onClick) {
        let page = Number(currentPage) + 1;
        if (currentPage != totalPages){
            return  <Link to={"/gh?page="+page}>
                        <li key='next' onClick={onClick}>Next</li>
                    </Link>
        } else {
            return 
        }
    };

    renderLast(currentPage, totalPages, onClick) {
        let link = "/gh?page="+totalPages;
        if (currentPage == totalPages){
            return  <Link to={link}>
                        <li className="bold_li" key={totalPages} onClick={onClick}>{totalPages}</li>
                    </Link>
        } else {
            return  <Link to={link}>
                        <li key={totalPages} onClick={onClick}>{totalPages}</li>
                    </Link>
        }
    }

    onClick = (ownProps) => {
        if (typeof this.props.onClick === 'function') {
            let page = ownProps._targetInst.key;
            this.props.onClick(page);
        }
    }
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