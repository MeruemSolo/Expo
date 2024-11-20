import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import ProgrammingLanguageCard from './components/ProgrammingLanguageCard';

const programmingLanguages = [
    {
        title: 'JavaScript',
        experience: '2 года опыта',
        logo: 'https://miladfathy.gallerycdn.vsassets.io/extensions/miladfathy/js-snippet/0.0.3/1620337479564/Microsoft.VisualStudio.Services.Icons.Default',
    },
    {
        title: 'Python',
        experience: '1 год опыта',
        logo: 'https://avatars.mds.yandex.net/i?id=2151e41c7a7e7c3af6508806bdfffdf94f30a198-9181372-images-thumbs&n=13',
    },
    {
        title: 'Java',
        experience: '3 года опыта',
        logo: 'https://avatars.mds.yandex.net/i?id=ccfe7056d08c0f627f0d784dec0fc7e79559f20b-5895977-images-thumbs&n=13',
    },
    {
        title: 'C#',
        experience: '4 года опыта',
        logo: 'https://avatars.mds.yandex.net/i?id=2eae32f83fc48310bfcb0dc52a1857eba0f8af1a-13214101-images-thumbs&n=13',
    },
    {
        title: 'Ruby',
        experience: '1.5 года опыта',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Devicon-ruby-plain-wordmark.svg/640px-Devicon-ruby-plain-wordmark.svg.png',
    },
];

const App = () => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 2000);
    };

    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            {programmingLanguages.map((language, index) => (
                <ProgrammingLanguageCard
                    key={index}
                    title={language.title}
                    experience={language.experience}
                    logo={language.logo}
                />
            ))}
        </ScrollView>
    );
};

export default App;