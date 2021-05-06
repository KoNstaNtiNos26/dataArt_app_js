import {BASE_URL} from "../../util/const";
import {anotherList, isFounded} from "./actions";

export const getAnotherList = (query, page) => (dispatch) => {
    dispatch(isFounded(true));
    search(query, page).then(json => {
        const mapList = json.docs.map(doc => {
            const id = doc.key.split("/").pop();
            const fullText = doc.has_fulltext ? "yes" : "no";
            return {
                title: doc.title,
                subTitle: doc.subtitle,
                id,
                fullText,
                languages: doc.language,
                firstPublish: doc.first_publish_year,
                publishYears: doc.publish_year,
                author: doc.author_name
            }
        })
        const countOfAll = json.numFound;
        dispatch(anotherList(mapList, query, page, countOfAll));
        dispatch(isFounded(false));
    });
    
};

async function search(query, page) {
    try {
        const url = BASE_URL + `?q=${query}&page=${page}`;
        const result = await fetch(url);
        if(result.ok) {
            return await result.json();
        }
        else throw new Error("Doesn't fetch data");
    } catch(error) {
        console.log(error.message);
        return [];
    }
}
