import React from 'react';
import FilterLink from '../redux/stores/FilterLink';

const Footer = () => (
    <p>
        Show: {' '}
        <FilterLink filter="SHOW_ALL">All</FilterLink>
        {', '}
        <FilterLink filter="SHOW_AVTIVE">active</FilterLink>
        {', '}
        <FilterLink filter="SHOW_COMPLETED">completed</FilterLink>
    </p>
)

export default Footer;