import React,{Component} from 'react';

class SearchBar extends Component{
    render(){
      return (
          <div className="form-group">
              <input placeholder="Search Your Video"className="form-control" onChange={e=>this.onInputChange(e.target.value)} />
              <span >
              </span>
          </div>

        )
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
