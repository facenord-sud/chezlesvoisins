json.array!(@events) do |event|
  json.extract! event, :id, :name, :description, :start_at, :end_at, :artist
  json.url event_url(event, format: :json)
end
