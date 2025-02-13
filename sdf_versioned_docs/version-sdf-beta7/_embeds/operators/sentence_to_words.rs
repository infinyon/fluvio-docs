fn sentence_to_words(sentence: String) -> Result<Vec<String>> {
    Ok(sentence.split_whitespace().map(String::from).collect())
}
