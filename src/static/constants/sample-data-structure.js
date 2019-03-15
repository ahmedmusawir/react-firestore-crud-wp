{
    id: '7bb54fb5-d363-4806-99fd-eea623f006c2',
    tag: 'AI Runtime',
    page: '<id_of_features_page>',
    component: 'DoubleSection'
    props: {
        theme: 'light',
        left: {
           component: 'headline',
           props: {
                 title: 'Deploy to production in an instant',
                 description: 'With a single click, Machinify automatically generates a production version of your AI model. Our simple yet powerful API efficiently returns predictions inmilliseconds.',
           }        
        },
        right: {
            component: 'img',
            props: { image: '<id_of_earth-3_image>', }
        }
    }
},

{
    id: '7bb54fb5-d363-4806-99fd-eea623f006c2',
    tag: 'event',
    page: '<id_of_media_page>',
    component: 'CardSection',
    props: {
      theme: 'light', 
      title: 'Data Science Meetup - Intro To Supervised Learning',
      description: 'Add the description to the event here',
      thumbnail: '<id_of_thumbnail_image>',
      link: '<id_of_article_page>',
      }
}

{
    id: '7bb54fb5-d363-4806-99fd-eea623f006c2',   
    tag: 'Homepage Hero Banner,
    page: '<id_of_home_page>',
    component: 'HomeHeroBlock'
    props: {
        tagline: 'Boost Your Industrial Operations'
        image: '<id_of_hero_image>'
    }
},
{
    id: '7bb54fb5-d363-4806-99fd-eea623f006c2', 
    tag: 'Homepage Hero Banner,
    page: '<id_of_home_page>',
    component: 'DoubleSection'
    props: {
        left: {
            component: 'ParallaxTile',
            props: {
                title: 'Simplify and Automate Through Innovations in Physics and AI'
                description: 'Data and AI should be accessible and easy to align with core business operations. DeepCast.ai empower companies to effectively eliminate workflow bottlenecks and increase ROI. ',
           }
        },
        right: {
            component: 'Img',
            props: {image: '<id_of_physics_ai_icon>'}
        },
    }
},
...more sections go below