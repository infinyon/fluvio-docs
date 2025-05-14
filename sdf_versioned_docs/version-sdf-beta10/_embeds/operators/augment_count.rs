fn augment_count(word: String) -> Result<String> {
    Ok(format!("{}({})", word, word.chars().count()))
}
