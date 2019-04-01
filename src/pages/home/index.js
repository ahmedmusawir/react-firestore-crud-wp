import React from 'react';
import { Link } from 'react-router-dom';
import db from 'db';
import {
  Layout,
  PageContainer,
  Paragraph,
  Block,
  Section,
} from 'components/layout';
import DataAddForm from 'components/custom/DataAddFrom';

class Home extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.unsubscribe = null;
    this.ref = db.collection('dishes');
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;

    let data = [];

    db.collection('dishes').onSnapshot(res => {
      res.docChanges().forEach(change => {
        const doc = { ...change.doc.data(), id: change.doc.id };

        switch (change.type) {
          case 'added':
            data.push(doc);
            break;
          case 'modified':
            const index = data.findIndex(item => item.id === doc.id);
            data[index] = doc;
            break;
          case 'removed':
            data = data.filter(item => item.id !== doc.id);
            break;
          default:
            break;
        }
      });

      if (this._isMounted) {
        this.setState({ data });
      }
    });
  }

  delete = id => {
    console.log(id);
    db.collection('dishes')
      .doc(id)
      .delete()
      .then(() => {
        console.log('Docment successfully deleted!');
      })
      .catch(error => {
        console.log('Error removing document: ', error);
      });
  };

  // update = id => {
  //   console.log(id);
  // };

  render() {
    let list = this.state.data.map(dish => {
      return (
        <li className="list-group-item" key={dish.id}>
          <h6>
            {dish.name} - {dish.orders}
            <button
              className="float-right btn btn-danger"
              onClick={() => this.delete(dish.id)}
            >
              X
            </button>
            <Link className="float-right btn btn-info" to={`edit/${dish.id}`}>
              E
            </Link>
          </h6>
        </li>
      );
    });

    return (
      <Layout>
        {/* TOP HERO SECTION */}
        <PageContainer>
          <Section height="14rem" bgColor="lightblue">
            <Block justify="center" align="center" direction="column">
              <h1>Dish Tracker with FireStore</h1>
              <DataAddForm />
            </Block>
          </Section>
          <Section>
            <Block>
              <Paragraph>
                <ul className="list-group">{list}</ul>
              </Paragraph>
            </Block>
          </Section>
        </PageContainer>
      </Layout>
    );
  }
}

export default Home;
