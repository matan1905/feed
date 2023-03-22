import React, {useCallback, useEffect, useRef} from 'react';
import {useInfiniteQuery} from "react-query";
import {fetchPosts} from "../lib/api/feed-api";
import Post from "./post";

function Feed() {
    const {
        data,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage
    } = useInfiniteQuery('posts', ({pageParam = 0}) => fetchPosts(pageParam),
        {
            getNextPageParam: (lastPage, allPages) => {
                if (!lastPage.hasMore) return undefined
                return allPages.length + 1
            },
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        })

    const observerElem = useRef(null)
    const handleObserver = useCallback((entries) => {
        const [target] = entries
        if(target.isIntersecting && hasNextPage) {
            fetchNextPage()
        }
    }, [fetchNextPage, hasNextPage])

    useEffect(() => {
        const element = observerElem.current
        const option = { threshold: 0 }

        const observer = new IntersectionObserver(handleObserver, option);
        observer.observe(element)
        return () => observer.unobserve(element)
    }, [fetchNextPage, hasNextPage, handleObserver])

    return (
        <div className="flex flex-col  w-full h-full items-center space-y-6">
            {data?.pages.flatMap(x => x.data).map((post) => <Post key={post.id} post={post}/>)}
            <div className='loader' ref={observerElem}>
                {isFetchingNextPage && hasNextPage ? 'Loading more posts...' : ''}
            </div>
        </div>
    );
}

export default Feed;