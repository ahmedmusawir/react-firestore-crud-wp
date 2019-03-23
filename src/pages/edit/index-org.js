import React from 'react';
import db from 'db';
import {
  Layout,
  PageContainer,
  Paragraph,
  Block,
  Section,
} from 'components/layout';
import DataEditForm from 'components/custom/DataEditFrom';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        orders: '',
      },
    };
  }
  async componentDidMount() {
    const ref = await db.collection('dishes').doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        const dish = doc.data();
        // console.log(dish);
        this.setState({ data: dish });
      } else {
        console.log('No such document!');
      }
    });
  }
  onChangeHandler = e => {
    this.setState({
      data: {
        [e.target.name]: e.target.value,
      },
    });
    // const state = this.state;
    // state[e.target.name] = e.target.value;
    // this.setState({ data: state });
  };
  render() {
    console.log(this.state.data.name);
    console.log(this.state.data.orders);
    const { name, orders } = this.state.data;

    return (
      <Layout>
        {/* TOP HERO SECTION */}

        <PageContainer>
          <Section height="14rem" bgColor="lightblue">
            <Block justify="center" align="center" direction="column">
              <h1>Edit Dish with FireStore</h1>
              <div>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Dish Name:
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      onChange={this.onChangeHandler}
                      required
                      value={name}
                    />
                  </label>
                  <label>
                    No. of Orders:
                    <input
                      className="form-control"
                      type="number"
                      name="orders"
                      onChange={this.onChangeHandler}
                      required
                      min="20"
                      max="300"
                      value={orders}
                    />
                  </label>
                  <input
                    className="btn btn-warning btn-md mb-1"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
            </Block>
          </Section>
        </PageContainer>
      </Layout>
    );
  }
}

export default Edit;
