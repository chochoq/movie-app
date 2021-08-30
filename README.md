# (React) movie list

기술스택: React, axios, gh-pages, react-router-dom

생성일: 2021년 8월 26일 오전 2:24

# 링크

[Movie List web](https://chochoq.github.io/movie-app/#/)
[Notion page](https://persistent-fruit-85b.notion.site/React-movie-list-3c9a929c319b42b588104d32629664e5)

# 깃허브

[GitHub - chochoq/movie-app](https://github.com/chochoq/movie-app)

## **서비스설명**

![스크린샷 2021-08-26 오전 2.32.02.png](https://persistent-fruit-85b.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fed95602f-23d3-4400-9258-9d3d7e4bb7f0%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-08-26_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_2.32.02.png?table=block&id=32ddbd6a-9b1d-449c-b41f-dc6b535f4f82&spaceId=a07b9679-e55c-4b34-ad51-a4e7fac6c83a&width=6680&userId=&cache=v2)

[YTS](https://yts.mx/) API를 axios로 연결해, 영화리스트를 받아와 출력해줍니다.

# 🛠기술스택🛠

- React
- axios
- gh-pages
- react-router-dom

# 기술 구현 사항

- 메인 페이지 (Home.js)
    - **axios**를 사용해 API를 받아온다.

        ```jsx
        //Home.js

        getMovies = async () => {
          const {data:{data:{movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
          this.setState({ movies:movies, is_loading:false });
          };

          componentDidMount() {
            this.getMovies();
          };
        ```

    - is_loading을 만들어 state를 변경하며, 로딩이 완료 되었을 경우/ 완료 되지 않았을 경우를 나눠 만들어준다.

        ```jsx
        //Home.js

        state = {
          is_loading: true,
        	movies: [],
          };

        getMovies = async () => {
          const {data:{data:{movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
          this.setState({ movies:movies, is_loading:false });
          };

        componentDidMount() {
          this.getMovies();
        };

        render() {
            const { is_loading, movies, } = this.state;
            return (
              <section className="container">
                {is_loading ?(
                  //is_loading 이 false일 때 return 값
                ) : (
                   //is_loading 이 true일 때 return 값
                      )
                    }
                  </div>
                )}
              </section>
            )
          };
        ```

- movie list의 item (Movie.js)
    - react-router-dom의 Link를 사용해 state를 **detail**에 보내준다

        ```jsx
        //Movie.js
        <Link
            to={{
                pathname: `/detail/${id}`,
                state: {
                    year: year,
                    title: title,
                    summary: summary,
                    poster: poster,
                    genres: genres
                }   
            }}
        >
        ```

    - **img**에 **alt, title**을 사용하는 이유

        ```jsx
        //Movie.js
        <img src={poster} alt={title} title={title} />
        ```

        `alt`속성은 img의 내용을 해당 이미지를 텍스트로 대체해서 나오게한다. 스크린 리더로 들을 수 있다.

        `title`속성은 이미지위에 마우스를 대면 alt 속성값이 보여진다. title 속성은 거의 모든 브라우저에서 잘 보여진다.

        ![스크린샷 2021-08-26 오전 3.07.21.png](https://persistent-fruit-85b.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fea6d668b-bcff-4a86-bee5-ee3df0b7660c%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-08-26_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_3.07.21.png?table=block&id=ca4a9376-d2c2-4181-9545-63713f5a076f&spaceId=a07b9679-e55c-4b34-ad51-a4e7fac6c83a&width=1310&userId=&cache=v2)

        title 속성은 절대 alt 속성을 대체할 수 없으니 주의한다.

    - summary는 길기때문에 slice()속성을 이용해 잘라준다

        ```jsx
        //Movie.js
        <h5 className="movie_summary">{summary.slice(0, 140)}...</h5>
        ```

- Movie.css

    ![스크린샷 2021-08-26 오전 3.28.02.png](https://persistent-fruit-85b.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc1888cdf-9c81-4f2d-a00f-4751dc92f8ce%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-08-26_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_3.28.02.png?table=block&id=0b60e217-af72-4e27-a024-26d9e8f9106c&spaceId=a07b9679-e55c-4b34-ad51-a4e7fac6c83a&width=770&userId=&cache=v2)

    - box shadow

        ```css
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
            0 8px 16px -8px rgba(0, 0, 0, 0.3), 
            0 -6px 16px -6px rgba(0, 0, 0, 0.025);
        ```

    - ul, li stayle 변경

        ```css
        .movie .movie_genres {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          margin: 5px 0px;
        }
        .movie_genres li,
        .movie .movie_year {
          margin-right: 10px;
          font-size: 14px;
        }
        ```

- 상세 페이지 (Detail.js)
    - Movie.js에서 보면 state를 받아 사용한다.

        ```jsx
        //Detail.js
        componentDidMount() {
            const { location,history } = this.props;
        }
        ```

    - 페이지에 state가 없을 경우(undefined), main으로 보내준다.

        ```jsx
        //Detail.js
        componentDidMount() {
            if (location.state === undefined) {
                history.push('/');
            }
        }
        ```

    - 주소값을 `'/detail/:id'`로 줬지만, 새로고침 시 state가 사라져서 if로 넣어줬다.

        ```jsx
        //Detail.js
        if (location.state) {
            return (
            <div className='movie'>
                <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                <div className="movie_data">
                    <h3 className="movie_title">{location.state.title}</h3>
                    <h5 className="movie_year">{location.state.year}</h5>
                    <p className="movie_genres">{location.state.genre}</p>
                    <h5 className="movie_summary">{location.state.summary}</h5>
                </div>
            </div>
        )
        } else {
            return null;
        }
        ```

- 메뉴(Navigation.js)
    - Link를 이용해 원하는 componet로 이동

        ```jsx
        //Navigation.js

        <Link to='/'>Home</Link>
        ```

## 새롭게 배운 것

조그만한 프로젝트지만, 새로운 css 문법을 배웠다.

Link에서 state넘기는 법을 다시 상기.
