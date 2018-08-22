import React from 'react';

function SortButtons(props) {
    return (
        <div>
            <input value="" name="text-name" type="text" />
            <button type="button" className="btn podcastSortBtn">Horror</button>
            <button type="button" className="btn podcastSortBtn">Comedy</button>
            <button type="button" className="btn podcastSortBtn">Political</button>
            <button type="button" className="btn podcastSortBtn">Gaming</button>
            <button type="button" className="btn podcastSortBtn">True Crime<br/></button>
        </div>
    )
}
export default SortButtons;