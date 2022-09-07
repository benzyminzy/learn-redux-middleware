const Sample = ({ loadingPost, loadingUsers, post, users }) => {
  return (
    <div>
      <section>
        <h1>포스트</h1>
        {/* 유효성 검사 */}
        {loadingPost && '로딩 중...'}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h1>사용자 목록</h1>
        {/* 유효성 검사 */}
        {loadingUsers && '로딩 중...'}
        {!loadingUsers && users && (
          <ul>
            users.map(user => (
            <li key={users.id}>
              {users.username}({users.email})
            </li>
            ))
          </ul>
        )}
      </section>
    </div>
  );
};
