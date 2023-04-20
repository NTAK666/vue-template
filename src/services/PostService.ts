import axios from "axios";
import { Post } from "@/entities/Post";
import { API } from "@/config/api";
import { useQuery } from "@tanstack/vue-query";
import { QUERY_KEY } from "@/config/query";

const getPosts = async (): Promise<Post[]> =>
	axios.get(API.post.get).then(res => res.data);
export const usePosts = () => useQuery(QUERY_KEY.POSTS.ALL, getPosts);
