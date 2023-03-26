const PostSummaryItem = (post) => {
  return `
    <div class="list-group-item p-2 d-flex justify-content-between align-items-center">
        <ul>
            <li class="text-secondary">${post.topic}</li>
            <li>
                <span class="text-dark fw-bold">${post.userName}</span>
                <i class="fas fa-check-circle"></i>
                <span class="text-secondary">- ${post.time}</span>
            </li>
            <li class="text-dark fw-bold">${post.title}</li>
            <li class="text-secondary">${post.tuit}</li>
        </ul>
        <img
          class="wd-article-image rounded"
          src=${post.image}
          alt=${post.userName}
        />
    </div>
    `;
};

export default PostSummaryItem;
