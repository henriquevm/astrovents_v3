import { ViewLogo, TxtLogo, ImgOpenLogo } from './styles';

type ButtonBlackProps = {
    title: string;
}

export function TitlePageBig({ title }: ButtonBlackProps) {
    return (
        <ViewLogo>
            <TxtLogo>{title}</TxtLogo>
            <ImgOpenLogo source={require('../../../img/openLogo.png')} />
        </ViewLogo>
    );
}

