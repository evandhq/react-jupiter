import React from 'react';
import PropTypes from 'prop-types';

export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article className="font-sans">
    <section className="w-full max-w-screen-xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-bold mb-4">Pages in Storybook</h2>
      <p className="text-gray-700 mb-4">
        We recommend building UIs with a{' '}
        <a
          href="https://componentdriven.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          <strong>component-driven</strong>
        </a>{' '}
        process starting with atomic components and ending with pages.
      </p>
      <p className="text-gray-700 mb-4">
        Render pages with mock data. This makes it easy to build and review page states without
        needing to navigate to them in your app. Here are some handy patterns for managing page data
        in Storybook:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li>Use a higher-level connected component. Storybook helps you compose such data from the
        "args" of child component stories</li>
        <li>Assemble data in the page component from your services. You can mock these services out
        using Storybook.</li>
      </ul>
      <p className="text-gray-700 mb-4">
        Get a guided tutorial on component-driven development at{' '}
        <a
          href="https://storybook.js.org/tutorials/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Storybook tutorials
        </a>
        . Read more in the{' '}
        <a
          href="https://storybook.js.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          docs
        </a>
        .
      </p>
    </section>
  </article>
);

Page.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
}; 