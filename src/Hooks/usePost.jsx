import axios from "axios";
import { useState } from "react";
import { useAuth } from "../Context/Auth"; // Make sure to import useAuth if required
import { useSelector } from "react-redux";

export const usePost = ({ url, /* login = false, */ type = false }) => {
       const auth = useAuth();
       const user = useSelector(state => state?.user?.data || null)
       const [loadingPost, setLoadingPost] = useState(false);
       const [response, setResponse] = useState(null);

       const postData = async (data, name) => {
              setLoadingPost(true);
              try {
                     const contentType = type ? 'application/json' : 'multipart/form-data';
                     const config = /* !login && */ user?.token
                            ? {
                                   headers: {
                                          'Content-Type': contentType,
                                          'Authorization': `Bearer ${user?.token || ''}`,
                                   },
                            }
                            : {
                                   headers: { 'Content-Type': contentType },
                            };

                     const response = await axios.post(url, data, config);

                     if (response.status === 200) {
                            setResponse(response);
                            { name ? auth.toastSuccess(name) : '' }
                            // auth.toastSuccess(name)
                     }
              } catch (error) {
                     console.error('error post', error);
                     if (error.response?.data?.errors) {
                            Object.values(error.response.data.errors).forEach(value => {
                                   value.forEach(err => auth.toastError(err));
                            });
                     }
              } finally {
                     setLoadingPost(false);
              }
       };

       return { postData, loadingPost, response };
};
