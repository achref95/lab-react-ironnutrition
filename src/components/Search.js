import { Input } from "antd";

const Search = ({ handleSearch }) => {
  return (
    <div>
      <h6>Search</h6>
        <form>
            <Input 
                type="text" 
                placeholder="Search for foods"
                onChange={(e) => handleSearch(e.target.value)}
            />
        </form>
    </div>
  )
}

export default Search
