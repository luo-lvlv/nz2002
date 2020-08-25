import {Component},React from 'react';
import styles from './cell.module.css';
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class Cell extends Component{
	static defaultProps = {
		index:null,
		url:'',
		to:null,
		label:''
	};
	static propTypes={
		title: propTypes.string.isRequired,
		label:propTypes.string,
		index:propTypes.number,
		url:propTypes.string,
		to:propTypes.shape({
			pathname:propTypes.string.isRequired,
			search:propTypes.shape({
				collectionName:propTypes.string.isRequired
			})
		})
	};
	
	go = ()=>{
		let {url,to,history} = this.props;
		if(url) window.open(url,'_blank')
		else if(to) history.push({pathname:to.pathname,search: `collectionName=${to.search.collectionName}`})
	};
	
	render(){
		let {title,label,index,children} = this.props;
		
		return(
		<div className={styles.cell}>
			{children}
			<h3>
				{index + 1 ? <span>{index + 1}.</span> : null}
				{title}
			</h3>
			<p>{label}</p>
		</div>
		)
	}
}

export default withRouter(Cell);