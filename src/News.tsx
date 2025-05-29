interface NewsProps {
  headline: string;
  imageUrl: string;
  imageAlt?: string;
  linkUrl?: string;
  description?: string;
}

export default function News({
  headline,
  imageUrl,
  imageAlt = "News Thumbnail",
  linkUrl = "https://example.com",
  description = "This is a sample description for the news item. It can be a few sentences long and will be replaced with real news content later. The image on the left is clickable and leads to more details."
}: NewsProps) {
  return (
    <div className="flex items-start bg-white rounded-3xl border-3 border-black p-8 max-w-5xl mx-auto mb-10">
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block flex-shrink-0">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-auto h-50 object-cover rounded-md"
        />
      </a>
      <div className="ml-6 flex-1">
        <h3 className="text-2xl font-bold mb-4">{headline}</h3>
        <p className="text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
