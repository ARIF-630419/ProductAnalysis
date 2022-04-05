import React from 'react';
import "./Blogs.css"

const Blogs = () => {
    return (
        <div>
            <h1>What is Context API?</h1>
            <p className='text-contant'> A React app can use the React Context API to generate global variables that can be passed around. This is an alternative to "prop drilling," which entails passing props from grandparent to child to parent and so on. Context is also marketed as a simpler, lighter way to Redux state management.Without having to manually transmit data through props, the Context API may be used to communicate data with different components. For example, the Context API is appropriate for the following use cases: theming, user language, authentication, and so on.Context API is a (sort of) new feature in React 16.3 that allows you to easily and lightly communicate state across the entire project (or part of it).</p>
            <h1>Difference Between Inline vs Inline-block</h1>
            <p className='text-contant'>
                <span className='bold'>Inline:</span> Inline elements appear on the same line as the content and tags beside them, rather than on a new line.Inline elements are treated differently by browsers when it comes to margins and padding. On an inline element, you can add space to the left and right, but you can't add height to the top or bottom padding or margin.
                As illustrated below, inline elements can appear within block elements. On the left and right sides of each inline element, I've placed white padding.
            </p>
            <p className='text-contant'>
                <span className='bold'>Inline-block:</span> Inline-block elements are similar to inline elements, but they have the ability to have padding and margins on all four sides. In your CSS code, you'll need to declare display: inline-block.
                Inline-block is frequently used to create horizontal navigation links, as demonstrated below. A horizontal navigation menu with an orange background has been built.
            </p>
        </div>
    );
};

export default Blogs;