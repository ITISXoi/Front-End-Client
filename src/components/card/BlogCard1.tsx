import moment from "moment";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: {
    id: number;
    img: string;
    title: string;
    description: string;
    author: {
      name: string;
      avatar: string;
    };
    createdAt: number;
  };
  onClick?: () => void;
}

export default function BlogCard1({ data, onClick }: Props): JSX.Element {
  return (
    <>
      <article className="sc-card-article">
        <div className="card-media">
          <Image height={500} width={500} src={data.img} alt="blog thumbnail" />
        </div>
        <div className="meta-info">
          <div className="author">
            <div className="avatar">
              <Image
                height={100}
                width={100}
                src={data.author.avatar}
                alt="avatar"
              />
            </div>
            <div className="info">
              <span>Post owner</span>
              <h6>
                <Link href="/authors-2">{data.author.name}</Link>
              </h6>
            </div>
          </div>
          <div className="date">
            {moment(data.createdAt).format("MMM D, YYYY")}
          </div>
        </div>
        <div className="text-article">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
        <div
          role="button"
          className="sc-button fl-button pri-3 cursor-pointer"
          onClick={onClick}
        >
          <span>Create NFTs</span>
        </div>
      </article>
    </>
  );
}
