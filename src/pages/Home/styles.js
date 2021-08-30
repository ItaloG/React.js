import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const GistIcon = styled(FaGithub)`
    font-size: 40px;

    cursor: pointer;
    transition: .2s;

    :hover{
        color: var(--primary);
    }
`;

export const Main = styled.main`
    margin-top: 60px;

    display: grid;
    grid-template-columns: 20% 60% 20%;

    > nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        > img {
            margin-top: 20px;
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
        
        > section {
            display: flex;
            flex-direction: column;
            gap: 5px;
            /* background-color: #00000080; */
            font-size: 18px;
            font-weight: 600;
            text-align: center;
        }

       > div > img {
            width: 60px;
            height: 60px;
        }
    }

    > aside {
        margin: 20px auto;

        > button {
            width: 200px;
            padding: 10px;
            border: unset;
            background-color: #4c8c4a;

            border-radius: 5px;
            color: #fff;
        }
        
    }
`;

export const FeedContainer = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;
    padding: 10px;

    border: 1px dashed grey;

`;

export const Post = styled.article`

    width: 80%;
    min-height: 100px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    

    box-shadow: 0px 10px 10px rgba(0,0,0, 0.25);


    > header {
        display: flex;
        flex-direction: row;
        align-items: center;

        gap: 10px;

        > img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
        }

        > div {
            gap: 5px;
            font-size: 18px;

            > p {
                font-size: 14px;
                color: var(--textGray);
            }
        }
        
    }

    > main {
        margin-top: 10px;

        > img {
            width: calc(100% + 40px);
            margin-left: -20px;
            margin-top: 10px;
        }

        > div {
            > h1 {
                font-size: 22px;
            }
            > p {
                margin-top: 5px;
                padding: 10px 0px 10px 12px;

                border-left: 2px solid var(--primary);
                font-size: 18px;
            }
        }

        > section{
            margin-top: 10px;
            display: flex;
            gap: 5px;

            > p {
                padding: 5px;
                
                box-shadow: 0px 0px 10px rgba(0,0,0, 0.25);
                    
            }
        }
    }

    > footer {
        > h2 {
            margin-top: 10px;
            transition: 0.2s;
            font-size: 18px;
            cursor: pointer;
            
            :hover {
                color: var(--primary);
            }
        }
    }
  
`;

