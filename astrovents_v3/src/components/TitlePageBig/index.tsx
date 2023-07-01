import { ViewLogo, TxtLogo, ImgOpenLogo } from './styles';

type ButtonBlackProps = {
    title: string;
}

export function TitlePage({ title }: ButtonBlackProps) {
    return (
        <ViewLogo>
            <TxtLogo>{title}</TxtLogo>
            <ImgOpenLogo source={require('../../../img/openLogo.png')} />
        </ViewLogo>
    );
}

