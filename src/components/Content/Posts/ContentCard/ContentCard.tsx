import { ContentCardProps } from "./ContentCard.interface";
import Link from 'next/link';
import Image from "next/image";


const ArticlePost: React.FC<ContentCardProps> = ({ BlokModel }) => {

    // Will have 3 types of Article Post, 1 = Single Image, 2 = 3 Images, of 3 = Multiple images

    return (
        <div className="post-card -center">
            <a className="card__cover">
                <img />
            </a>
        </div>
    );
}

const PodcastPost: React.FC<ContentCardProps> = ({ BlokModel }) => {
    return (
        <div className="post-card -full -audio -center">
            <audio className="audio" id="audio-player">
                <source src="" type="audio/mp3"></source>
            </audio>
            <div className="card__content">
                <h5 className="card__content-category">Graphic</h5>
                <a className="card__content-title">I want to create a logo with illustrator hacker</a>
                <div className="card__content-info">
                    <div className="info__time info__author">
                        <i className="far fa-user"></i>
                        <p>Dylan Young</p>
                    </div>
                    <div className="info__time">
                        <i className="far fa-clock"></i>
                        <p>Clock Wed 02, 2019</p>
                    </div>
                    <div className="info__comment">
                        <i className="far fa-comment"></i>
                        <p>3</p>
                    </div>
                </div>
                <p className="card__content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore aliqua.</p>
                <a className="more-btn">
                    Read More
                </a>
            </div>
        </div>
    );
}

const VideoPost: React.FC<ContentCardProps> = ({ BlokModel }) => {

    return (
        <div className="post-card -full -video -center">
            <div className="plyr__video-embed video" id="video-player">
                <iframe src=""></iframe>
            </div>
            <div className="card__content">
                <h5 className="card__content-category">Design</h5>
                <a className="card__content-title">
                    where I can found the sound in this video template
                </a>
                <div className="card__content-info">
                    <div className="info__time info__author">
                        <i className="far fa-user"></i>
                        <p>Dylan Young</p>
                    </div>
                    <div className="info__time">
                        <i className="far fa-clock"></i>
                        <p>Clock Wed 02, 2019</p>
                    </div>
                    <div className="info__comment">
                        <i className="far fa-clock"></i>
                        <p>3</p>
                    </div>
                </div>
                <p className="card__content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore aliqua.</p>
                <a className="more-btn">
                    Read More
                </a>
            </div>
        </div>
    );
}

export { ArticlePost, PodcastPost, VideoPost };