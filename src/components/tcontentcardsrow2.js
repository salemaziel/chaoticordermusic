import React from 'react'
import { TaggedContentCard } from 'react-ui-cards'
import cardStyles from '../css/cardstyles.module.css';
import Sorry from '../images/song-art/closeyoureyestosee-SORRY.jpg'
import Chains from '../images/song-art/medicineman-CHAINS.jpg'
import Angel from '../images/song-art/shaman-ANGEL.jpg'
import Never from '../images/song-art/The-Magician-NEVEREND.jpg'
import Earth from '../images/song-art/HighPriestess-EARTH.jpg'





import '../css/cardstyles.css';



class TContentCards02 extends React.Component {
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
                thumbnail={Sorry}
                title='Sorry'
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
                thumbnail={Chains}
                title='Chains'
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
                thumbnail={Angel}
                title='Angel'
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
                thumbnail={Never}
                title='Never End'
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
                thumbnail={Earth}
                title='Earth'
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
      export default TContentCards02