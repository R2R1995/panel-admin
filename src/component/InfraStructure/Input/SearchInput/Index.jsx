import React, { useState } from "react"
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import SimpleLineIcon from 'react-simple-line-icons';
const SearchInput = ({
    className,
    name,
    id,
    hasDisable,
    placeholder,
}) => {
    const [value, setValue] = useState("");

    return (
        <div className="search">
            <span class="search-icon">
                <SimpleLineIcon name="magnifier" />
            </span>
            <Input
                name={name}
                id={id}
                placeholder={placeholder}
                type="text"
                className={className}
                value={value}
                hasDisable={hasDisable}
                onChange = {e => setValue(e.target.value)}
            />
        </div>
    )
}

SearchInput.prototype = {
    className: PropTypes.string,
    hasDisable: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
};
export default SearchInput;