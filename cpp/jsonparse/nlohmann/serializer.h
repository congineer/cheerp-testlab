#ifndef SERIALIZER_H
#define SERIALIZER_H

namespace nlohmann
{
template <typename T>
struct adl_serializer<std::shared_ptr<T>>
{
  static void to_json(json &j, const std::shared_ptr<T> &opt)
  {
    if (!opt)
      j = nullptr;
    else
      j = *opt;
  }

  static std::shared_ptr<T> from_json(const json &j)
  {
    if (j.is_null())
      return std::unique_ptr<T>();
    else
      return std::unique_ptr<T>(new T(j.get<T>()));
  }
};
} // namespace nlohmann

#endif // SERIALIZER_H
