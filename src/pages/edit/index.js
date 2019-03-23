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
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      key: '',
      name: '',
      orders: '',
    };
  }
  componentDidMount() {
    this._isMounted = true;

    const ref = db.collection('dishes').doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        const dish = doc.data();
        if (this._isMounted) {
          this.setState({ key: doc.id, name: dish.name, orders: dish.orders });
        }
      } else {
        console.log('No such document!');
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onChangeHandler = e => {
    if (this._isMounted) {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const { name, orders } = this.state;
    const updateRef = db.collection('dishes').doc(this.state.key);
    updateRef
      .set({
        name,
        orders,
      })
      .then(docRef => {
        if (this._isMounted) {
          this.setState({
            key: '',
            name: '',
            orders: '',
          });
        }
        this.props.history.push('/');
      })
      .catch(error => {
        console.log('Error Updating Document: ', error);
      });
  };

  render() {
    const { name, orders } = this.state;

    return (
      <Layout>
        {/* TOP HERO SECTION */}

        <PageContainer>
          <Section height="14rem" bgColor="lightblue">
            <Block justify="center" align="center" direction="column">
              <h1>Edit Dish with FireStore</h1>
              {/* <DataEditForm data={this.state} /> */}
              <div>
                <form onSubmit={this.onSubmitHandler}>
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
                      // min="20"
                      // max="300"
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
