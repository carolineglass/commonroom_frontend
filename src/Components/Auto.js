import React, {useState, useEffect, useRef} from "react";

const Auto = ({countries}) => {

  let [display, setDisplay] = useState(false)
  let [search, setSearch] = useState("")
  let wrapperRef = useRef(null)

  let setCountry = (country) => {
    setSearch(country.name)
    setDisplay(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  let handleClickOutside = (e) => {
    let {current: wrap} = wrapperRef
    if (wrap && !wrap.contains(e.target)) {
      setDisplay(false)
    }
  }

  return (
    <div>
      <input 
        id="auto" 
        type="text" 
        onClick={() => setDisplay(!display)} 
        placeholder="Search Country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        
        {display && (
          <div className="auto-container">
            {countries
            .filter(({name}) => name.indexOf(search) > -1)
            .map((country, idx) => {
              return (
                <div 
                  ref={wrapperRef}
                  onClick={() => setCountry(country)} 
                  className="option"
                  key={idx}
                  tabIndex="0">
                  <span>
                    {country.name}
                  </span>
                </div>
              )
            })}
          </div>
        )}
    </div>
  );
}

export default Auto;