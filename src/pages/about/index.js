import React from 'react';
import { Layout } from 'components/layout';
import { H1 } from 'components/general';

class About extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - About"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        {/* TOP HERO SECTION */}

        <H1 danger>About Page</H1>
      </Layout>
    );
  }
}

export default About;
