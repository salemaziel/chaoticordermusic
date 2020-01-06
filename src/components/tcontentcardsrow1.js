import React from 'react'
import { TaggedContentCard } from 'react-ui-cards'
import cardStyles from '../css/cardstyles.module.css';
import Chemtrails from '../images/song-art/Chemtrails.jpg'
import Burn from '../images/song-art/The-Tower-BURN.jpg'
import Feedthepeople from '../images/song-art/album-cover-2500x1364-FEEDTHEPEOPLE.jpg'
import Another from '../images/song-art/The-Wait-ANOTHERTHING.jpg'
import Hate from '../images/song-art/the-oracle-HATE.jpg'





import '../css/cardstyles.css';



class TContentCards extends React.Component {
    render() {
        let {
          className,
          href,
          thumbnail,
          title,
          description,
          tags,
          ...other
        } = this.props;
        return (
        <div className="tagged-content-card">
            
            <TaggedContentCard
                className={cardStyles.taggedcontentcard}
                href=''
                thumbnail={Chemtrails}
                title='ChemTrails'
                description=''
                tags={[
                    '',
                    '',
                    ''
                ]}
                />
            <TaggedContentCard
                className={cardStyles.taggedcontentcard}
                href=''
                thumbnail={Feedthepeople}
                title='Feed The People'
                description=''
                tags={[
                    '',
                    '',
                    ''
                    ]}
                />
            <TaggedContentCard
                className={cardStyles.taggedcontentcard}
                href=''
                thumbnail={Burn}
                title='Burn'
                description=''
                tags={[
                    '',
                    '',
                    ''
                ]}
            />
            <TaggedContentCard
                className={cardStyles.taggedcontentcard}
                href=''
                thumbnail={Another}
                title='Another Thing'
                description=''
                tags={[
                    '',
                    '',
                    ''
                ]}
            />
            <TaggedContentCard
                className={cardStyles.taggedcontentcard}
                href=''
                thumbnail={Hate}
                title='Hate'
                description=''
                tags={[
                    '',
                    '',
                    ''
                ]}
            />
      </div>
   );
}
}
      export default TContentCards